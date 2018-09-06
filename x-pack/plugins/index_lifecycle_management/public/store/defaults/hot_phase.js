/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import {
  PHASE_ENABLED,
  PHASE_ROLLOVER_ENABLED,
  PHASE_ROLLOVER_MAX_AGE,
  PHASE_ROLLOVER_MAX_AGE_UNITS,
  PHASE_ROLLOVER_MAX_SIZE_STORED,
  PHASE_ROLLOVER_MAX_SIZE_STORED_UNITS,
  PHASE_ROLLOVER_ALIAS,
  PHASE_ROLLOVER_MAX_DOC_SIZE,
} from '../constants';

export const defaultHotPhase = {
  [PHASE_ENABLED]: true,
  [PHASE_ROLLOVER_ENABLED]: true,
  [PHASE_ROLLOVER_ALIAS]: '',
  [PHASE_ROLLOVER_MAX_AGE]: '',
  [PHASE_ROLLOVER_MAX_AGE_UNITS]: 'd',
  [PHASE_ROLLOVER_MAX_SIZE_STORED]: '',
  [PHASE_ROLLOVER_MAX_SIZE_STORED_UNITS]: 'gb',
  [PHASE_ROLLOVER_MAX_DOC_SIZE]: '',
};