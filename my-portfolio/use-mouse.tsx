'use client';
import { type RefObject, useLayoutEffect, useRef, useState } from 'react';

interface MouseState {
  x: number | null;
  y: number | null;
  elementX: number | null;
  elementY: number | null;
  elementPositionX: number | null;
  elementPositionY: number | null;
}
