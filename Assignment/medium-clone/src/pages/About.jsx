import React from "react";
import { Navbar, Footer } from "../components";


const About = () => {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="about-container">
                    <div className="about-con-left">
                        <h3 className="about-heading">Everyone has a <br />story to tell.</h3>
                        <p className="about-para para1">Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>

                        <p className="about-para para2">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>

                        <p className="about-para para3">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</p>

                        <p className="about-para para4">Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>

                        <p className="about-para para5">Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.</p>
                    </div>
                    <div className="about-con-right">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;