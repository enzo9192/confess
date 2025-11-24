"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "motion/react"
import { Heart, ArrowRight } from "lucide-react"

export default function SpecialMessage({ onComplete }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const messageRef = useRef(null)

  const fullMessage = `Dear Chimu💕
Since then u have come into My life, my life feels like a beautiful dream, bringing light to places I didn't even know were dark.
From the moment our eyes first met every day with u feels like magic ur smile brightens my darkest days.
Sometimes, words seem so small compared to what I feel for you,but I’ll try my best to capture the love that fills my heart whenever I think of u.Every day, I find more reasons to appreciate you, admire you, and, most importantly, love you even more.I am a bit cheesy but all those words said by me are deeply connected to my heart.Ever since I am calling u princess my heart says, yesss she is a princess by not only looks but with beautiful heart and soul. Ur way of loving me is truly beautiful. Our late calls, hrs feel like seconds for us.. 
Everyday we talk our bond strengths up idk how u r gonna react on this pn now I have the urge to change ur name form princess to ''Rani'' yesss my queen, I am ready to do anything for u expect dying because I want to live my life with u.Once u said God has sent me to u I feel the same because In my whole life I have never experienced this kind of attachment with someone.
As I repeatedly say u r wife material but for me the truth is u r my dream wife material 🤣.
I really don't know how I Will express my feelings to you. Since the time I am with you, I find everything so beautiful and new your love is so passionate, that it makes me forget all my pain your love is So pure and very special for me.Idk what I really feel for u because I don't know for me what u r,what I know is my love for u and ur love for me.
The plan was to never fall in love but suddenly u came into my life,ur cute little talks and ur cute lines makes me blush everytime.I was thinking making me blush is impossible, making me fall in love is impossible, making me to put my ego aside is impossible.But u did it without doing anything.The reason of making this web page is,I really can't hide anything from u ree.Before some months I was thinking u r my best sis ever🤣 but if God wanted us to be bro and sis he could have sent us to the same family.I feel role of urs in my life is to be my soulmate forever 💞.
Ur care for me,ur love for me and ur  possessive nature for me, makes me feel urs.I think u don't know what u exactly feel for me because I was also not knowing it before.Yesterday while surfing on internet I saw one article which explained the invisible string theory,the article says that u met wrong people sometimes which comes to ur life to teach you the lesson and some people comes to u automatic at very unexpected time because even staying close they are away from u,as universe wants u to met them at particular time.
Theory says that people who went from ur life were not urs, people coming to ur life through unexpected ways are the real ones and for me u r the one.
For me finding love was very harder but finding love and best friend in one was my luck.My only demand for u is to stay with me because I can't lose u..
My plan was,i wanted it to be confessed after 10th but I can't hide it anymore.
For me ur laugh is the sweetest melody I've ever heard,and ur love is the greatest gift I could ever receive.I want to spend forever making u smile, forever holding ur hand, forever being the reason u believe in love and also I wanna be ur sorry saying partnar..
My intention to confess this was not because I want u,my intention was to tell u and let uk what I am feeling!!
In some yrs would u like to change ur pincode into mine's.
Will u be mine forever??

Ur sugarpunch💕`

  useEffect(() => {
    if (currentIndex < fullMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)

        // Auto scroll to bottom as text appears
        if (messageRef.current) {
          messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
      }, 20)
      return () => clearTimeout(timer)
    } else {
      setShowCursor(false)
      setTimeout(() => setShowButton(true), 1000)
    }
  }, [currentIndex, fullMessage])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center text-white px-4 py-4 md:px-6 md:py-6"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showButton ? -6 : 0 }}
        className="flex flex-col max-w-4xl mx-auto w-full">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-6">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-pink-400 fill-current mx-auto" />
            </motion.div>
          </div>

          <div
            ref={messageRef}
            className="max-h-[60vh] overflow-y-auto pr-2 scroll-smooth transition-all duration-500"
          >
            <pre className="text-base md:text-lg lg:text-xl font-light leading-relaxed whitespace-pre-line text-pink-100 text-left">
              {displayedText}
              {currentIndex < fullMessage.length && showCursor && (
                <span className="inline-block w-0.5 h-4 md:h-5 bg-pink-400 ml-1 animate-pulse"></span>
              )}
            </pre>
          </div>
        </div>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 md:px-10 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-1 md:gap-2">
                <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                View Memories
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
