import {useInput} from 'ink';
import {type SelectState} from './use-select-state.js';

export type UseSelectProps = {
	/**
	 * When disabled, user input is ignored.
	 *
	 * @default false
	 */
	isDisabled?: boolean;

	/**
	 * When false, component yields keyboard input to other handlers.
	 * Use for focus arbitration between multiple interactive components.
	 *
	 * @default true
	 */
	isActive?: boolean;

	/**
	 * Select state.
	 */
	state: SelectState;
};

export const useSelect = ({
	isDisabled = false,
	isActive = true,
	state,
}: UseSelectProps) => {
	useInput(
		(_input, key) => {
			if (key.downArrow) {
				state.focusNextOption();
			}

			if (key.upArrow) {
				state.focusPreviousOption();
			}

			if (key.return) {
				state.selectFocusedOption();
			}
		},
		{isActive: !isDisabled && isActive},
	);
};
