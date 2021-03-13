import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';
import styled from 'styled-components';
import Swal from 'sweetalert2'

const RedeemModal = (props) => {
	const {
		redeemProduct,
		userPoints,
		productCost,
		productId,
	} = props;


	return (
		<div>
			<Button
				type="button"
				onClick={async ()  => {		
					const rest_dele =await redeemProduct(productId, productCost, userPoints);
					if(rest_dele){
					Swal.fire({
						icon: 'success',
						title: 'Congratulations!',
						text: "You've redeemed the product successfully",
						})

					}else{
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Something went wrong!',
							footer: 'Please try again in a few minutes.'
							})
					}
				}}
			>
				Redeem now
			</Button>
		</div>
	);
};

export default RedeemModal;
const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: '#fffefe',
		border: 'none',
		boxShadow: theme.shadows[5],
		borderRadius: '10px',
		padding: theme.spacing(2, 4, 3),
		color: '#0AD4FA',
		fontWeight: 300,
		textAlign: 'center',
		outline: 'none'
	}
}));

const Button = styled.button`
	padding: 0.5rem 2.2rem;
	border: none;
	border-radius: 20px;
	background-color: #f2f1f1;
	color: ${theme.fonts.primaryColor};
	font-size: 0.9em;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #c7c5c5;
		color: #fff;
	}
`;

const Title = styled.h3`
	font-weight: 500;
`;
