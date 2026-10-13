"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const [code, setCode] = useState("");
  const [hint, setHint] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [modalStep, setModalStep] = useState<
    "closed" | "please" | "apology" | "please-again"
  >("closed");
  const [isForgiven, setIsForgiven] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code === "1927") {
      setHint("");
      setIsUnlocked(true);
      return;
    }

    setHint("Hint: It’s a combination of our birthdates.");
  }

  if (isUnlocked) {
    return (
      <main className="login-page">
        <section className="login-card welcome-card" aria-live="polite">
          <Image
            alt="A sad animated face"
            className="welcome-gif"
            height={300}
            src="/sad.gif"
            unoptimized
            width={300}
          />
          <h1 className="welcome-heading">
            <em>Heyy... 😭</em>
          </h1>
          <div className="welcome-message">
            <p className="login-description">mujhe pta h tum naraz ho 😢</p>
            <p className="login-description">
              aur mujhe yeh bhi pta h maine glti ki h plzzz meri bt sunlo
            </p>
          </div>
          <div className="answer-buttons">
            <button
              className="answer-button answer-yes"
              onClick={() => {
                setIsForgiven(false);
                setModalStep("apology");
              }}
              type="button"
            >
              theek h bolo
            </button>
            <button
              className="answer-button answer-no"
              onClick={() => {
                setIsForgiven(false);
                setModalStep("please");
              }}
              type="button"
            >
              nhi, abhi gussa huuu
            </button>
          </div>
        </section>
        {modalStep !== "closed" &&
          createPortal(
            <div
              className="sorry-modal-backdrop"
              onClick={() => setModalStep("closed")}
            >
              <section
                aria-labelledby="sorry-modal-title"
                aria-modal="true"
                className={`sorry-modal${modalStep !== "please" ? " apology-modal" : ""}`}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
              >
                {modalStep === "please" ? (
                  <>
                    <Image
                      alt="A cute crying face"
                      className="sorry-modal-gif"
                      height={120}
                      src="/cryyy.gif"
                      unoptimized
                      width={120}
                    />
                    <h2 id="sorry-modal-title">Please na... 🥺</h2>
                    <p>
                      Bas ek chance do mujhe... Main sach mein sorry bolna
                      chahta hoon. Please?
                    </p>
                    <span className="sorry-modal-hearts" aria-hidden="true">
                      💕
                    </span>
                    <button
                      className="sorry-modal-button"
                      onClick={() => setModalStep("apology")}
                      type="button"
                    >
                      Okay Bolo
                    </button>
                  </>
                ) : modalStep === "please-again" ? (
                  <>
                    <Image
                      alt="A pleading animated face"
                      className="sorry-modal-gif"
                      height={180}
                      src="/please.gif"
                      unoptimized
                      width={180}
                    />
                    <h2 id="sorry-modal-title">Please na... 🥺</h2>
                    <button
                      className="sorry-modal-button"
                      onClick={() => {
                        setIsForgiven(true);
                        setModalStep("apology");
                      }}
                      type="button"
                    >
                      okaaaay maaf kiyyaa
                    </button>
                  </>
                ) : isForgiven ? (
                  <>
                    <Image
                      alt="A tulip-themed gift"
                      className="sorry-modal-gif gift-modal-gif"
                      height={280}
                      src="/tulip.gif"
                      unoptimized
                      width={280}
                    />
                    <h2 id="sorry-modal-title">Thanku! 😍</h2>
                    <p className="gift-modal-message">
                      You are the prettiest flower in my garden of life. I love you so much and I’m really sorry for hurting you. I promise to be more careful and loving from now on. Please accept this little gift as a token of my love and apology.
                    </p>
                    <p className="gift-modal-message">
                      I hope it brings a smile to your face, just like you always bring joy to mine.
                    </p>
                    <p className="gift-modal-message">
                      Forever yours, with all my love. 💖
                    </p>
                    <p className="gift-modal-message">
                      This is the little tulip I picked for you, just like the one in our special place. 🌷
                    </p>
                    <p className="gift-modal-message">
                      i can say sorry a million times, but it won&apos;t be enough to express how much I regret hurting you. Please forgive me, my love. 💔 I can&apos;t live without youuuu yrrrrr. you are only mineeeeee.
                    </p>
                    <p className="gift-modal-love">I love you so muchhh ♥</p>
                  </>
                ) : (
                  <>
                    <h2 id="sorry-modal-title" className="apology-heading">
                      Dil Se Sorry... 💕
                    </h2>
                    <h3 >Suhaniii yrrrr.....</h3>
                    <div className="apology-copy">
                      <p>
                        Mujhe pata hai maine tumhe hurt kiya. Ye soch ke bohot
                        bura lagta hai.
                      </p>
                      <p>
                        Tum mere liye kitne special ho, words mein nahi bata
                        sakta.
                      </p>
                      <p>
                        Jo bhi hua, uska koi excuse nahi. Maine galti ki aur
                        main accept karta hoon.
                      </p>
                      <p>
                        Tumhari feelings matter karti hain mujhe. Bohot zyada.
                      </p>
                      <p>
                        Main promise karta hoon agli baar se zyada careful
                        rahunga.
                      </p>
                      <p>
                        Tum mujhe itna pyaar dete ho, aur maine tumhe takleef
                        di. I’m really sorry.
                      </p>
                      <p className="flex justify-start gap-2">Please mujhe ek aur chance do? <span><FaHeart color="red" size="16"/></span>
                      </p>
                    </div>
                    <div className="apology-actions">
                      <button
                        className="sorry-modal-button apology-yes-button"
                        onClick={() => setIsForgiven(true)}
                        type="button"
                      >
                        theek h maaf kiya
                      </button>
                      <button
                        className="sorry-modal-button apology-no-button"
                        onClick={() => setModalStep("please-again")}
                        type="button"
                      >
                        nhi krungi
                      </button>
                    </div>
                  </>
                )}
              </section>
            </div>,
            document.body,
          )}
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-heart" aria-hidden="true">
          <FaHeart color="red" size={30}/>
        </div>
        <p className="login-eyebrow">JUST FOR US</p>
        <h1>Heyyy Suhaniiiii</h1>
        <p className="login-description">
          Enter our special code to continue.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="special-code">Our special code</label>
          <input
            autoComplete="off"
            id="special-code"
            inputMode="numeric"
            maxLength={4}
            onChange={(event) => {
              setCode(event.target.value.replace(/\D/g, ""));
              setHint("");
            }}
            placeholder="••••"
            type="password"
            value={code}
            aria-describedby={hint ? "login-hint" : undefined}
          />
          {hint && (
            <p className="login-hint" id="login-hint" role="status">
              {hint}
            </p>
          )}
          <button type="submit">Unlock</button>
        </form>
      </section>
    </main>
  );
}
