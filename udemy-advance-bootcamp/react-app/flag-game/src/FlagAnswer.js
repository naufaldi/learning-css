import React, { Component } from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({ correct, answer, onNext }) => (
	<div className="flag-answer">
		{correct ? `Correct! : ${answer}` : `Incorrect! Correct Answer : ${answer}`}
		<StyledButton text="Next" onClick={onNext} />
	</div>
);

export default FlagAnswer