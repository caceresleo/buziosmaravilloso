import { useState } from 'react';

const ImageSlider = ({slides}) => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const leftArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		left: '32px',
		fontSize: '45px',
		color: '#fff',
		zIndex: 1,
		cursor: 'pointer',
	};

	const rightArrowStyles = {
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		right: '32px',
		fontSize: '45px',
		color: '#fff',
		zIndex: 1,
		cursor: 'pointer',
	};
	const sliderStyles = {
		height: '100%',
		position: 'relative',
		backgroundColor: 'red',
	};
	const slideStyles = {
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: `url(${slides[currentIndex].url})`,
	};

	const optionalStyles = {
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: `url(${slides[currentIndex].url})`,
	};	

	const dotsContainerStyles = {
		marginTop: '10px',
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
	};

	const dotStyles = {
		margin: '0 3px',
		cursor: 'pointer',
		fontSize: '40px',
	};

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1 ;
		setCurrentIndex(newIndex);

	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length-1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};


	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex);
	};

	return(
		<div style={sliderStyles}>
			<div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
			<div style={rightArrowStyles} onClick={goToNext}>❱</div>			
			<div  style={slideStyles} ></div>
			<div style={dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
						<div key={slideIndex} style={{margin: '0 3px',
					cursor: 'pointer',
					width: '100%',
					height: '100%',
					borderRadius: '10px',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundImage: `url(${slides[slideIndex].url})`}} onClick={() => goToSlide(slideIndex)}>•</div>
								))}
			</div>

		</div>
		);
};

export default ImageSlider; 