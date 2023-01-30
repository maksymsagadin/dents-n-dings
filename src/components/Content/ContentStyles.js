import styled from 'styled-components'
import { motion } from 'framer-motion'
import { light, dark, primary } from '../../data/GlobalData'


export const ContentSec = styled.div`
	padding: 60px 0;
	background: ${({ inverse }) => (inverse ? light : dark )};
`

export const ContentRow = styled.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`

export const ContentColumn = styled(motion.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};

	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`
export const ContentHeading = styled(motion.h2)`
	margin: 1rem 0 0.5rem;
	font-size: clamp(1.3rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 700;
	color: ${ ({inverse}) => (inverse ? dark : light )};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`
export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-top: ${({ mt }) => (mt ? '1.3rem' : '0')};
	margin-bottom: 30px;
	line-height: 24px;
	color: ${ ({inverse}) => (inverse ? '#6a6a6a' : light )};
	font-size: clamp(0.8rem, 2vw, 1rem);
	font-weight: 500;
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`

export const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? 'black' : 'white')};
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid ${primary};
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:before {
		background: ${primary};
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 0%;
		height: 100%;
	}
	&:hover:before {
		width: 200%;
	}
	&:hover {
		color: ${({ inverse }) => (inverse ? light : dark )};
	}
`

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 600px;
	border-radius: 4px;
	justify-content: center;
	position: relative;
	background-color: ${primary};
	padding: 0;
`

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	border-radius: 4px;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 600px;
	z-index: 1;
`



