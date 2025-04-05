function PrintButton() {
    const print = () => {
        console.log("Print the dotpage");
    };

    return (
        <button className="printButton" onClick={print}>
            <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#f0f0f0"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M8 15H16V18M16 18V21H8V18H4V9H8M16 18H20V9H8M8 9V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V5"
                        stroke="#000000"
                        strokeWidth="1.224"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </svg>
        </button>
    );
}

export default PrintButton;