import { useState, useEffect } from 'react';
import ProgramsWidget from "@/components/ui/ProgramsWidget";
import GroupCallsWidget from "@/components/ui/GroupCallsWidget";
import Applications from "@/components/ui/Applications";
import Mentors from "@/components/Mentors";
import RecentActivity from "@/components/ui/RecentActivity";
import Users from "@/components/Users";

// Export default positions for use in other components
export const defaultWidgetPositions = {
  programs: { area: 'programs', row: 1, col: 1, rowSpan: 2, colSpan: 1 },
  usersChart: { area: 'users', row: 3, col: 1, rowSpan: 1, colSpan: 1 },
  groupCalls: { area: 'groupCalls', row: 1, col: 2, rowSpan: 1, colSpan: 2 },
  applications: { area: 'applications', row: 2, col: 2, rowSpan: 2, colSpan: 1 },
  mentors: { area: 'mentors', row: 2, col: 3, rowSpan: 1, colSpan: 1 },
  recentActivities: { area: 'recentActivities', row: 3, col: 3, rowSpan: 1, colSpan: 1 }
};

export default function Widgets({ activeWidgets, onPositionsChange, initialPositions }) {

  // State to track widget positions
  const [widgetPositions, setWidgetPositions] = useState(initialPositions || defaultWidgetPositions);

  // Update widget positions when initialPositions changes
  useEffect(() => {
    if (initialPositions) {
      setWidgetPositions(initialPositions);

      // Update grid style
      if (typeof window !== 'undefined') {
        setGridStyle(calculateGridStyle(window.innerWidth, initialPositions));
      }
    }
  }, [initialPositions]);

  // State to track the widget being dragged
  const [draggedWidget, setDraggedWidget] = useState(null);

  // State to track the widget being hovered over
  const [hoveredWidget, setHoveredWidget] = useState(null);

  // State to track the current grid style
  const [gridStyle, setGridStyle] = useState({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, minmax(200px, auto))',
    gridTemplateAreas: `
      "programs groupCalls groupCalls"
      "programs applications mentors"
      "users applications recentActivities"
    `,
    gap: '1.5rem'
  });

  // Function to calculate grid style based on window width and widget positions
  const calculateGridStyle = (width, positions = widgetPositions) => {
    // Default layout for large screens (desktop)
    let gridTemplateAreas = '';

    // Create a 3x3 grid
    const grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    // Fill the grid with widget areas based on their positions
    Object.entries(positions).forEach(([widgetId, position]) => {
      if (activeWidgets[widgetId]) {
        const { row, col, rowSpan, colSpan } = position;
        for (let r = row - 1; r < row - 1 + rowSpan; r++) {
          for (let c = col - 1; c < col - 1 + colSpan; c++) {
            if (r >= 0 && r < 3 && c >= 0 && c < 3) {
              grid[r][c] = position.area;
            }
          }
        }
      }
    });

    // Convert the grid to a gridTemplateAreas string
    for (let r = 0; r < 3; r++) {
      gridTemplateAreas += `"${grid[r].join(' ')}" `;
    }

    const desktopStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, minmax(200px, auto))',
      gridTemplateAreas,
      gap: '1.5rem'
    };

    // Check if we're on a smaller screen
    if (width < 1024) {
      // Tablet layout
      if (width >= 768) {
        return {
          ...desktopStyle,
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateAreas: `
            "programs groupCalls"
            "programs applications"
            "users mentors"
            "recentActivities recentActivities"
          `
        };
      }
      // Mobile layout
      return {
        ...desktopStyle,
        gridTemplateColumns: '1fr',
        gridTemplateAreas: `
          "programs"
          "users"
          "groupCalls"
          "applications"
          "mentors"
          "recentActivities"
        `
      };
    }

    return desktopStyle;
  };

  // Function to handle drag start
  const handleDragStart = (widgetId) => {
    setDraggedWidget(widgetId);
  };

  // Function to handle drag over
  const handleDragOver = (e, widgetId) => {
    e.preventDefault();
    if (draggedWidget && draggedWidget !== widgetId) {
      setHoveredWidget(widgetId);
    }
  };

  // Function to handle drop
  const handleDrop = (e, targetWidgetId) => {
    e.preventDefault();
    if (draggedWidget && draggedWidget !== targetWidgetId) {
      // Create a copy of current positions
      const newPositions = { ...widgetPositions };
      const draggedPos = { ...newPositions[draggedWidget] };


      // Swap positions
      newPositions[draggedWidget] = targetPos;
      newPositions[targetWidgetId] = draggedPos;

      // Skip automatic adjustment of other widgets when GroupCallsWidget is moved
      // This prevents layout disruption when GroupCallsWidget is moved to a smaller space
      if (draggedWidget !== 'groupCalls' && targetWidgetId !== 'groupCalls') {
        // Adjust other widgets to fill space
        // Get all widgets that need to be adjusted
        const widgetsToAdjust = Object.keys(newPositions).filter(
          id => id !== draggedWidget && id !== targetWidgetId && activeWidgets[id]
        );

        // Rearrange widgets to fill empty spaces
        widgetsToAdjust.forEach(widgetId => {
          const pos = newPositions[widgetId];

          // If this widget was in the same row/column as the dragged widget
          // and is now creating a gap, move it to fill the space
          if (pos.row === draggedPos.row || pos.col === draggedPos.col) {
            // Check if there's empty space nearby and move to fill it
            const emptySpaces = findEmptySpaces(newPositions);
            if (emptySpaces.length > 0) {
              // Find the closest empty space
              const closestSpace = emptySpaces.reduce((closest, space) => {
                const currentDistance = Math.abs(space.row - pos.row) + Math.abs(space.col - pos.col);
                const closestDistance = Math.abs(closest.row - pos.row) + Math.abs(closest.col - pos.col);
                return currentDistance < closestDistance ? space : closest;
              }, emptySpaces[0]);

              // Move widget to the empty space
              newPositions[widgetId] = {
                ...pos,
                area: `area-${closestSpace.row}-${closestSpace.col}`,
                row: closestSpace.row,
                col: closestSpace.col
              };
            }
          }
        });
      }

      // Update positions
      setWidgetPositions(newPositions);

      // Notify parent component of position changes
      if (onPositionsChange) {
        onPositionsChange(newPositions);
      }

      // Update grid style
      if (typeof window !== 'undefined') {
        setGridStyle(calculateGridStyle(window.innerWidth, newPositions));
      }
    }

    // Reset drag state
    setDraggedWidget(null);
    setHoveredWidget(null);
  };

  // Helper function to find empty spaces in the grid
  const findEmptySpaces = (positions) => {
    // Create a 3x3 grid representation
    const grid = Array(3).fill().map(() => Array(3).fill(false));

    // Mark occupied spaces
    Object.values(positions).forEach(pos => {
      if (pos.row >= 1 && pos.row <= 3 && pos.col >= 1 && pos.col <= 3) {
        for (let r = pos.row - 1; r < pos.row - 1 + pos.rowSpan; r++) {
          for (let c = pos.col - 1; c < pos.col - 1 + pos.colSpan; c++) {
            if (r >= 0 && r < 3 && c >= 0 && c < 3) {
              grid[r][c] = true;
            }
          }
        }
      }
    });

    // Find empty spaces
    const emptySpaces = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (!grid[r][c]) {
          emptySpaces.push({ row: r + 1, col: c + 1 });
        }
      }
    }

    return emptySpaces;
  };

  // Function to handle drag end
  const handleDragEnd = () => {
    setDraggedWidget(null);
    setHoveredWidget(null);
  };

  // Effect to handle window resize
  useEffect(() => {
    // Set initial grid style based on window width
    if (typeof window !== 'undefined') {
      setGridStyle(calculateGridStyle(window.innerWidth));

      // Add resize event listener
      const handleResize = () => {
        setGridStyle(calculateGridStyle(window.innerWidth));
      };

      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [activeWidgets, widgetPositions]);

  // Function to get widget style based on its state
  const getWidgetStyle = (widgetId) => {
    const baseStyle = { 
      gridArea: widgetPositions[widgetId].area,
      cursor: 'move',
      transition: 'all 0.2s ease',
      position: 'relative'
    };

    // Add styles for dragged widget
    if (draggedWidget === widgetId) {
      return {
        ...baseStyle,
        opacity: 0.6,
        transform: 'scale(0.98)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      };
    }

    // Add styles for hovered widget
    if (hoveredWidget === widgetId) {
      return {
        ...baseStyle,
        transform: 'scale(1.02)',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        zIndex: 10
      };
    }

    return baseStyle;
  };

  return (
    <div className="mt-6">
      {/* Grid layout for widgets */}
      <div className="grid gap-6" style={gridStyle}>
        {/* Programs: column 1, rows 1-2 */}
        {activeWidgets.programs && (
          <div 
            style={getWidgetStyle('programs')}
            draggable
            onDragStart={() => handleDragStart('programs')}
            onDragOver={(e) => handleDragOver(e, 'programs')}
            onDrop={(e) => handleDrop(e, 'programs')}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full">
              <ProgramsWidget />
            </div>
          </div>
        )}

        {/* User Chart: column 1, row 3 */}
        {activeWidgets.usersChart && (
          <div 
            style={getWidgetStyle('usersChart')}
            // draggable
            // onDragStart={() => handleDragStart('usersChart')}
            // onDragOver={(e) => handleDragOver(e, 'usersChart')}
            // onDrop={(e) => handleDrop(e, 'usersChart')}
            // onDragEnd={handleDragEnd}
          >
            <div className="h-full">
             <Users/>
            </div>
          </div>
        )}

        {/* Group Calls: columns 2-3, row 1 */}
        {activeWidgets.groupCalls && (
          <div 
            style={getWidgetStyle('groupCalls')}
            draggable
            onDragStart={() => handleDragStart('groupCalls')}
            onDragOver={(e) => handleDragOver(e, 'groupCalls')}
            onDrop={(e) => handleDrop(e, 'groupCalls')}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full">
              <GroupCallsWidget 
                isMoved={
                  widgetPositions.groupCalls.row !== defaultWidgetPositions.groupCalls.row ||
                  widgetPositions.groupCalls.col !== defaultWidgetPositions.groupCalls.col
                }
              />
            </div>
          </div>
        )}

        {/* Applications: column 2, rows 2-3 */}
        {activeWidgets.applications && (
          <div 
            style={getWidgetStyle('applications')}
            draggable
            onDragStart={() => handleDragStart('applications')}
            onDragOver={(e) => handleDragOver(e, 'applications')}
            onDrop={(e) => handleDrop(e, 'applications')}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full">
              <Applications />
            </div>
          </div>
        )}

        {/* Mentors: column 3, row 2 */}
        {activeWidgets.mentors && (
          <div 
            style={getWidgetStyle('mentors')}
            draggable
            onDragStart={() => handleDragStart('mentors')}
            onDragOver={(e) => handleDragOver(e, 'mentors')}
            onDrop={(e) => handleDrop(e, 'mentors')}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full">
              <Mentors />
            </div>
          </div>
        )}

        {/* Recent Activities: column 3, row 3 */}
        {activeWidgets.recentActivities && (
          <div 
            style={getWidgetStyle('recentActivities')}
            draggable
            onDragStart={() => handleDragStart('recentActivities')}
            onDragOver={(e) => handleDragOver(e, 'recentActivities')}
            onDrop={(e) => handleDrop(e, 'recentActivities')}
            onDragEnd={handleDragEnd}
          >
            <div className="h-full">
              <RecentActivity />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
