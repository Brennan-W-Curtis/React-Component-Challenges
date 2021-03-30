import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

class QuoteAndAuthor extends React.Component {
    render() {
        const randomColour = this.props.displayColour(); 
        const icon = <FontAwesomeIcon icon={faTwitter} id="brandIcon"/>
        const leftQuote = <FontAwesomeIcon icon={faQuoteLeft} id="leftQuote"/>

        return (
            <body className="background" style={{ backgroundColor: randomColour }}>
                <div style={{ backgroundColor: "white" }} id="quote-box">
                    <div className="fadeIn" key={Math.random()} style={{ color: randomColour }}>
                        {leftQuote}
                        <h1 id="text">{this.props.quote}</h1>
                        <h5 id="author"> - {this.props.author ? this.props.author : "Unknown Author"}</h5>
                    </div>
                    <button style={{ backgroundColor: randomColour }} id="tweet-button" className="buttons"><a href="https://twitter.com/?lang=en-ca" target="_blank" rel="noreferrer" id="tweet-quote">{icon}</a></button>
                    <button style={{ backgroundColor: randomColour }} id="new-quote" className="buttons" onClick={this.props.handleClick}>New Quote</button>
                </div>
            </body>
        );
    }
}

export default QuoteAndAuthor;