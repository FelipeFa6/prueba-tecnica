const Chevron = ({ orientation = 'down', smoothTransition = true }) => {
    const rotationDegrees = orientation === 'down' ? 90 : -90;

    const styles = {
        transform: `rotate(${rotationDegrees}deg)`,
        transition: smoothTransition ? 'transform 0.3s ease-in-out' : 'none',
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={styles}
        >
  		    <path
			    fill-rule="evenodd"
				d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
		</svg>

	)
}
export default Chevron;
