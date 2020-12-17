/**
 * Models package contains interfaces to define the models for Policies and
 * Passwords used by the puzzle.
 */

/** Password String */
export type Password = string;

/**
 * PasswordPolicy defines the limitations on passwords described by corporate.
 */
export interface PasswordPolicy {
  char: string;
  min: number;
  max: number;
}
