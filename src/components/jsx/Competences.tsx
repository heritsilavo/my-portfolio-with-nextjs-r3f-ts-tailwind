"use client";
import React from 'react';
import '@/components/css/Competences.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrent } from '@/lib/features/competences/competences';
import { animated, useSpring } from '@react-spring/web';
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const animDuration = 200;

const Competences: React.FC = () => {
  const competences = useSelector((state: any) => state.competences.list);
  const current = useSelector((state: any) => state.competences.current);
  const prev = useSelector((state: any) => state.competences.prev);
  const next = useSelector((state: any) => state.competences.next);

  const dispatch = useDispatch();

  const [currentStyle, currentApi] = useSpring(() => ({
    opacity: 1
  }));

  const [prevStyle, prevApi] = useSpring(() => ({
    opacity: 0.7
  }));

  const [nextStyle, nextApi] = useSpring(() => ({
    opacity: 0.7
  }));

  const show = (f: () => void) => {
    currentApi.start({ opacity: 1, config: { duration: animDuration } });
    prevApi.start({ opacity: 0.7, config: { duration: animDuration }, onRest: f });
  };

  const hide = (f: () => void) => {
    currentApi.start({ opacity: 0, config: { duration: animDuration } });
    prevApi.start({ opacity: 0, config: { duration: animDuration }, onRest: () => { show(f); } });
  };

  const setNext = () => {
    dispatch(setCurrent(current + 1));
    nextApi({ from: { opacity: 0 }, to: { opacity: 0.7 } });
    currentApi({
      from: {
        left: "80%",
        height: "75%",
        zIndex: "9",
        opacity: 0.7,
        cursor: "pointer",
        width: "90%",
      },
      to: {
        left: "0%",
        right: "0%",
        height: "100%",
        zIndex: "10",
        opacity: 1,
        cursor: "auto",
        width: "100%",
      }
    });
    prevApi({
      from: {
        right: "0%",
        height: "100%",
        zIndex: "10",
        opacity: 1,
        cursor: "auto",
        width: "100%",
      },
      to: {
        right: "80%",
        height: "75%",
        zIndex: "9",
        opacity: 0.7,
        cursor: "pointer",
        width: "90%",
      }
    });
  };

  const setPrev = () => {
    dispatch(setCurrent(current - 1));
    prevApi({ from: { opacity: 0 }, to: { opacity: 0.7 } });
    currentApi({
      from: {
        right: "80%",
        height: "75%",
        zIndex: "9",
        opacity: 0.7,
        cursor: "pointer",
        width: "90%",
      },
      to: {
        right: "0%",
        height: "100%",
        zIndex: "10",
        opacity: 1,
        cursor: "auto",
        width: "100%",
      }
    });
    nextApi({
      from: {
        left: "0%",
        height: "100%",
        zIndex: "10",
        opacity: 1,
        cursor: "auto",
        width: "100%",
      },
      to: {
        left: "80%",
        height: "75%",
        zIndex: "9",
        opacity: 0.7,
        cursor: "pointer",
        width: "90%",
      }
    });
  };

  return (
    <section className="flex flex-col items-center justify-start w-full" id="_sec5_">
      <div className="__titre__ w-full text-center mt-3">
        Mes compétences en informatique
      </div>

      <div className="__carrousel__ flex-grow-1 w-full mt-2 flex items-center justify-center">
        {current !== 0 && (
          <button onClick={setPrev} className="__control__ __btn_prev__">
            <ChevronLeftIcon />
          </button>
        )}

        <div className="__slide__">
          {prev != null && (
            <animated.div
              style={prevStyle}
              onClick={setPrev}
              className="border bg-gray-100 __slide_item__ __prev_slide__"
            >
              <Image alt="img" style={{ objectFit: "cover" }} src={competences[prev].image} fill />
            </animated.div>
          )}

          <animated.div style={currentStyle} className="border bg-white __slide_item__ __curr_slide__">
            <Image alt="img" style={{ objectFit: "cover" }} src={competences[current].image} fill />
          </animated.div>

          {next != null && (
            <animated.div
              style={nextStyle}
              onClick={setNext}
              className="border bg-gray-100 __slide_item__ __next_slide__"
            >
              <Image alt="img" style={{ objectFit: "cover" }} src={competences[next].image} fill />
            </animated.div>
          )}
        </div>

        {current !== (competences?.length - 1) && (
          <button onClick={setNext} className="__control__ __btn_next__">
            <ChevronRightIcon />
          </button>
        )}
      </div>
    </section>
  );
};

export default Competences;
