import React, { useEffect, useState } from 'react'
import Modal from '../Components/Modal';

const MainPage = ({ onYes, pinLength = 4 }) => {

    const [isClueModalOpen, setIsClueModalOpen] = useState(false);
    const [wrongPinModal, setWrongPinModal] = useState(false);
    const [pin, setPin] = useState("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const toggleClueModal = () => {
        setIsClueModalOpen(!isClueModalOpen);
    };

    const toggleWrongPinModal = () => {
        setWrongPinModal(!wrongPinModal);
    };

    const handleNumberClick = (number) => {
        if (pin.length < pinLength) {
            setPin(pin + number)
        }
    }

    useEffect(() => {
        if (pin.length === pinLength) {
            if(pin == "1110"){
                onYes();
                setPin("")
            }
            else{
                toggleWrongPinModal();
                setPin("")
            }
        }
    }, [pin, pinLength])

    const handleClear = () => {
        setPin("")
    }

    const handleBackspace = () => {
        setPin(pin.slice(0, -1))
    }

    return (
        <>
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-5 p-4">
                <img
                    src="https://media.tenor.com/vDdpdQ45DBEAAAAm/peach-goma-hello-peach-and-goma.webp"
                    className="w-32 animate-fade-in"
                    alt="penguin"
                    style={{
                    animationDelay: "0.2s",
                    opacity: 0,
                    animationFillMode: "forwards",
                    }}
                />
                <div className="flex space-x-3 md:space-x-4">
                    <h1
                        className="text-3xl md:text-6xl font-bold text-center animate-fade-in"
                        style={{
                            fontFamily: "Aloja",
                            animationDelay: "0.4s",
                            opacity: 0,
                            animationFillMode: "forwards",
                        }}
                        >
                        Hello
                    </h1>
                    <h1
                        className="text-3xl md:text-6xl font-bold text-center text-pink-600 animate-fade-in"
                        style={{
                            fontFamily: "Aloja",
                            animationDelay: "0.6s",
                            opacity: 0,
                            animationFillMode: "forwards",
                        }}
                    >
                        Mahal♡
                    </h1>
                </div>
                <p
                    className="text-xs md:text-sm opacity-80 text-center px-4 animate-fade-in"
                    style={{
                    fontFamily: "Comic Relief, Aloja",
                    animationDelay: "0.8s",
                    opacity: 0,
                    animationFillMode: "forwards",
                    }}
                >
                    You must enter the correct pin to continue :)
                </p>
                <div className='flex flex-col w-full max-w-sm py-2 px-5 md:py-5 md:px-10 border-2 border-pink-600 rounded-lg bg-pink-200 animate-fade-in'
                    style={{
                        animationDelay: "1s",
                        opacity: 0,
                        animationFillMode: "forwards",
                    }}>
                    <div className="flex justify-center gap-3 mb-8 mt-4">
                        {Array.from({ length: pinLength }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 ${
                                index < pin.length
                                    ? "bg-gradient-to-br from-pink-400 to-rose-400 shadow-lg border-2 border-pink-400 shadow-rose-300/50"
                                    : "bg-pink-200 border-2 border-pink-300"
                                }`}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        {numbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumberClick(num)}
                            className="group relative h-12 md:h-16 rounded-lg font-semibold text-base md:text-xl transition-all duration-200 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 group-hover:from-pink-300 group-hover:to-rose-400 transition-all duration-200" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-200" />
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-rose-600 scale-95 group-active:scale-100 transition-transform duration-100 rounded-lg opacity-0 group-active:opacity-100" />
                            <span className="relative text-white">{num}</span>
                        </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        {/* Clear Button */}
                        <button
                            onClick={handleClear}
                            className="group relative h-12 md:h-16 rounded-lg font-semibold text-xs md:text-sm transition-all duration-200 overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-gray-400 group-hover:to-gray-600 transition-all duration-200" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-200" />
                            <span className="relative text-white">CLEAR</span>
                        </button>

                        {/* Zero Button */}
                        <button
                            onClick={() => handleNumberClick("0")}
                            className="group relative h-12 md:h-16 rounded-lg font-semibold text-base md:text-xl transition-all duration-200 overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 group-hover:from-pink-300 group-hover:to-rose-400 transition-all duration-200" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-200" />
                            <span className="relative text-white">0</span>
                        </button>

                        {/* Backspace/Delete Button */}
                        <button
                            onClick={handleBackspace}
                            className="group relative h-12 md:h-16 rounded-lg font-semibold text-xs md:text-sm transition-all duration-200 overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-gray-400 group-hover:to-gray-600 transition-all duration-200" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-200" />
                            <span className="relative text-white">DEL</span>
                        </button>
                    </div>
                    {/* CLUE */}
                    <div className='text-pink-600 text-xs md:text-sm mb-2 mt-2 flex justify-end cursor-pointer' style={{fontFamily: "Comic Relief, Aloja"}}>
                        <p onClick={toggleClueModal}>Want some clue?</p>
                    </div>
                </div>
            </div>
            <Modal isOpen={isClueModalOpen} onClose={toggleClueModal} title='Clue??'>
                <div className='flex flex-col items-center pb-4'>
                    <img
                        src="https://media.tenor.com/_wDdhPZ93f8AAAAm/ok-yes.webp"
                        className="w-28 md:w-32 mb-3"
                    />
                    <p>It's your Birthday Lablab :)</p>
                </div>
            </Modal>
            <Modal isOpen={wrongPinModal} onClose={toggleWrongPinModal} title=''>
                <div className='flex flex-col items-center pb-4'>
                    <img
                        src="https://media.tenor.com/zkHuyoSXcDgAAAAm/goma-peach-and-goma.webp"
                        className="w-28 md:w-32 mb-5 mr-8"
                    />
                    <p>Incorrect pin please try again :P</p>
                </div>
            </Modal>
        </>
    );
}

export default MainPage