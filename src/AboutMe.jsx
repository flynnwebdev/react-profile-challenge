import React from "react"

export default function AboutMe(props) {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img src={props.image} />
            <article>
                <ol>
                    {props.bio.map(item => {
                        const firstWord = item.split(' ')[0]
                        item = item.replace(firstWord, '')
                        return <li><p><strong>{firstWord}</strong>{item}</p></li>
                    })}
                </ol>
            </article>
        </section>
    )
}