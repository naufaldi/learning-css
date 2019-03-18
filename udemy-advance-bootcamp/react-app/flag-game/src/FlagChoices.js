import React from 'react';
import StyledButon from './StyledButton';
import './FlagChoices.css';

const FlagChoices = (props) => {
	let options = props.options || [];
	const { handleChange, handleSubmit } = props;
	let inputs = options.map((opt) => (
		<label key={opt.id}>
			<input type="radio" value="{opt.id" checked={opt.checked} onChange={handleChange} name="flag-choice" />
			{opt.name}
		</label>
	));
	return (
		<form className="flag-form" onSubmit={handleSubmit}>
			{inputs}
			<StyledButon text="Guess" type="Submit" />
		</form>
	);
};

export default FlagChoices;