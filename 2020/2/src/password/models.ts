/**
 * Models package contains interfaces to define the models for Policies and
 * Passwords used by the puzzle.
 */

/** Password String */
export type Password = string;

/**
 * Policy defines the limitations on passwords described by corporate.
 */
export interface Policy {
  char: string;
  first: number;
  second: number;
}
