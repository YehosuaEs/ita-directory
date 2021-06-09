import styled from "styled-components";
import SelectArrow from "assets/images/select-arrow.svg";

export const Card = styled.div`
	min-width: 90%;
	height: auto;
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #fff;
`;

export const CardHeader = styled.div`
	height: auto;
	background-color: #292929;
	display: flex;
	flex-direction: column;

	padding-bottom: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0.5rem 2rem;
	}
`;

export const CardTitle = styled.h2`
	font-weight: 400;
	color: white;
	padding-right: 2rem;
`;

//Afecta a los selectores de los modals
export const CardSelector = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin-right: 0.3rem;
	padding-left: 0.5rem;
	width: 90px;
	height: 30px;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
	background-image: url(${SelectArrow});
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-size: 15px 12px;
	background-color: #fff;
`;

export const CardSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const CardOpenModal = styled.button`
	display: inline-flex;
	height: 35px;
	width: 35px;
	align-items: center;
	justify-content: center;
	border-radius: 90px;
	color: #e22e2e;
	background: #fff;
	border: none;
	cursor: pointer;
`;

export const Chart = styled.div`
	width: 100%;
	height: 50vh;
	margin: 12px;
`;
