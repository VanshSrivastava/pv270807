"use client";
import { useState } from "react";
import "./App.css"


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isEnvelopeOpen, setEnvelopeOpen] = useState(false);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With an Oreo chocolate? :D ",
      "How about Mcd?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to vansh's ghost",
      "please bb",
      ":((((",
      "PEEE RAAAAN JAAALIIIIIII -.-' ",
      "Itna gussa?",
      "No kyun click kar rhi? :(",
      "Darr nahi lagta kya?",
      "Are you enjoying this?",
      "Who is a sadist now?",
      "SOCHLOOOOOOO",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {!isEnvelopeOpen ? (
        <div className="container">
          <div className={`envelope-wrapper ${isHeartClicked ? "flap" : ""}`} onClick={() => setHeartClicked(true)}>
            <div className="envelope">
              <div className="letter">
              <p> Deer Pranjali, do you wanna regret something &#128520;</p>
                  <button
                    className="mr-5 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                    style={{ fontSize: "10px" }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setEnvelopeOpen(true);
                    }}
                  >
                    Yes
                  </button>
              </div>
            </div>
            <div className="heart"></div>
          </div>
        </div>
      ) : (
        <>
          {yesPressed ? (
            <>
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                <div className="my-4 text-4xl font-bold"> HAHAHAHAHAHHA!!! I love you so much Pranjali!!! </div>
                <img className="hearty" src="https://res.cloudinary.com/depcxk9nh/image/upload/IMG_3762_t0wmah.jpg"  alt="the face of a beautiful girl"/>
            </>
          ) : (
            <>
              <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
              <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
              <div className="flex items-center">
                <button
                  className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
