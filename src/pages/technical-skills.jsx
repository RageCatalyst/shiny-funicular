import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Skills({ setTitle }) {
    useEffect(() => {
        setTitle("Skills");
        document.title = "Skills - My Website";
    }, [setTitle]);

    return (
        <>

        </>
    )
}

Skills.propTypes = {
    setTitle: PropTypes.func.isRequired
};