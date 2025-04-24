"use client"
import React from 'react'
import { Button } from "./button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible"

interface CollapsibleSectionProps {
  title?: string
  icon?: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  headerContent?: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
  customHeader?: React.ReactNode
  onToggle?: () => void
}

export const CollapsibleSection = ({
  title,
  icon,
  children,
  defaultOpen = true,
  headerContent,
  className = "w-full space-y-2",
  triggerClassName = "w-9 p-0",
  contentClassName = "rounded-md border px-4 py-3 font-mono text-sm",
  customHeader,
  onToggle,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  
  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.()
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={className}
    >
      {customHeader ? (
        <div className="w-full">
          {customHeader}
        </div>
      ) : headerContent ? (
        <div className="w-full">
          {headerContent}
        </div>
      ) : (
        <div className="flex items-center justify-between space-x-4 px-4">
          <div className="flex items-center space-x-4">
            {icon && (
              <CollapsibleTrigger asChild>
                <button className="focus:outline-none transition-transform duration-200 ease-in-out hover:scale-105" onClick={handleToggle}>
                  {icon}
                </button>
              </CollapsibleTrigger>
            )}
            {title && (
              <h4 className="text-sm font-semibold">
                {title}
              </h4>
            )}
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className={triggerClassName}>
              <span className="sr-only">Toggle</span>
              {isOpen ? "−" : "+"}
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
      
      <CollapsibleContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className={contentClassName}>
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}