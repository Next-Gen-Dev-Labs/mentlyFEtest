'use client';
import { useState } from 'react';

export default function MySwitch({enabled,setEnabled}) {

  return (
    <label
      className="relative inline-flex items-center cursor-pointer"
      style={{
        width: '29.23px',
        height: '14.62px',
        borderRadius: '18.27px',
        transform: 'rotate(-180deg)',
      }}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={!enabled}
        onChange={() => setEnabled(!enabled)}
      />

      {/* Track */}
      <div
        className={`w-full h-full transition-colors duration-300`}
        style={{
          backgroundColor: !enabled ? '#FFFFFF' : '#C2C2C2',
          borderRadius: '18.27px',
          position: 'absolute',
          top: '2.19px',
          left: '0', // Keep the track within the bounds
          width: '29.23px',
          height: '14.62px',
          transform: 'rotate(-180deg)',
        }}
      />

      {/* Knob */}
      <div
        className={`absolute transition-transform duration-300`}
        style={{
          width: '11.69px',
          height: '11.69px',
          borderRadius: '50%',
          backgroundColor: !enabled ? '#1F0954' : '#FFFFFF',
          top: '3.65px',
          // Adjust the translation to move the knob within the bounds
          transform: `translateX(${enabled ? '14.62px' : '0'}) rotate(-180deg)`,
        }}
      />
    </label>
  );
}
