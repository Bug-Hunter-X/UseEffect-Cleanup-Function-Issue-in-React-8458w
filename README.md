# useEffect Cleanup Function Issue in React

This repository demonstrates a common issue with the `useEffect` hook's cleanup function in React. The example code shows how a cleanup function might not behave as expected if the dependency array is incorrectly specified.

## Problem

The `useEffect` hook's cleanup function is intended to run before the component unmounts or before the next effect runs.  However, in this example, the cleanup function does not run as expected, resulting in unexpected behavior or potential memory leaks. 

## Solution

The solution involves correctly specifying the dependency array in the `useEffect` hook.  By including the necessary state variable in the array, we ensure that the cleanup function executes appropriately.