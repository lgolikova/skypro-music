"use client";

import { setIsPlay } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Bar.module.css";

export const Bar = () => {
    const currentTrack = useAppSelector((state) => state.tracks.currentTrack);
    const isPlay = useAppSelector((state) => state.tracks.isPlay);
    const dispatch = useAppDispatch();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;
        if (!currentTrack) return;

        if (isPlay) {
            audioRef.current
                .play()
                .catch((err) => console.log("Play error:", err));
        } else {
            audioRef.current.pause();
        }
    }, [currentTrack, isPlay]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlay) {
            audioRef.current.pause();
            dispatch(setIsPlay(false));
        } else {
            audioRef.current.play();
            dispatch(setIsPlay(true));
        }
    };

    if (!currentTrack) return <></>;

    return (
        <div className={styles.bar}>
            <audio
                className={styles.audio}
                ref={audioRef}
                controls
                src={currentTrack?.track_file}
            ></audio>
            <div className={styles.bar__content}>
                <div className={styles.bar__playerProgress}></div>
                <div className={styles.bar__playerBlock}>
                    <div
                        className={classNames(
                            styles.bar__player,
                            styles.player
                        )}
                    >
                        <div className={styles.player__controls}>
                            <div className={styles.player__btnPrev}>
                                <svg className={styles.player__btnPrevSvg}>
                                    <use xlinkHref="/images/icons/prev.svg"></use>
                                </svg>
                            </div>
                            <div
                                className={classNames(
                                    styles.player__btnPlay,
                                    styles.btn
                                )}
                                onClick={togglePlay}
                            >
                                {isPlay ? (
                                    <svg className={styles.player__btnPauseSvg}>
                                        <use xlinkHref="/images/icons/pause.svg"></use>
                                    </svg>
                                ) : (
                                    <svg className={styles.player__btnPlaySvg}>
                                        <use xlinkHref="/images/icons/play.svg"></use>
                                    </svg>
                                )}
                            </div>
                            <div className={styles.player__btnNext}>
                                <svg className={styles.player__btnNextSvg}>
                                    <use xlinkHref="/images/icons/next.svg"></use>
                                </svg>
                            </div>
                            <div
                                className={classNames(
                                    styles.player__btnRepeat,
                                    styles.btnIcon
                                )}
                            >
                                <svg className={styles.player__btnRepeatSvg}>
                                    <use xlinkHref="/images/icons/repeat.svg"></use>
                                </svg>
                            </div>
                            <div
                                className={classNames(
                                    styles.player__btnShuffle,
                                    styles.btnIcon
                                )}
                            >
                                <svg className={styles.player__btnShuffleSvg}>
                                    <use xlinkHref="/images/icons/shuffle.svg"></use>
                                </svg>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                styles.player__trackPlay,
                                styles.trackPlay
                            )}
                        >
                            <div className={styles.trackPlay__contain}>
                                <div className={styles.trackPlay__image}>
                                    <svg className={styles.trackPlay__svg}>
                                        <use xlinkHref="/images/icons/note.svg"></use>
                                    </svg>
                                </div>
                                <div className={styles.trackPlay__author}>
                                    <Link
                                        className={styles.trackPlay__authorLink}
                                        href=""
                                    >
                                        {currentTrack?.name}
                                    </Link>
                                </div>
                                <div className={styles.trackPlay__album}>
                                    <Link
                                        className={styles.trackPlay__albumLink}
                                        href=""
                                    >
                                        {currentTrack?.author}
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.trackPlay__dislike}>
                                <div
                                    className={classNames(
                                        styles.player__btnShuffle,
                                        styles.btnIcon
                                    )}
                                >
                                    <svg className={styles.trackPlay__likeSvg}>
                                        <use xlinkHref="/images/icons/like.svg"></use>
                                    </svg>
                                </div>
                                <div
                                    className={classNames(
                                        styles.trackPlay__dislike,
                                        styles.btnIcon
                                    )}
                                >
                                    <svg
                                        className={styles.trackPlay__dislikeSvg}
                                    >
                                        <use xlinkHref="/images/icons/dislike.svg"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bar__volumeBlock}>
                        <div className={styles.volume__content}>
                            <div className={styles.volume__image}>
                                <svg className={styles.volume__svg}>
                                    <use xlinkHref="/images/icons/volume.svg"></use>
                                </svg>
                            </div>
                            <div
                                className={classNames(
                                    styles.volume__progress,
                                    styles.btn
                                )}
                            >
                                <input
                                    className={classNames(
                                        styles.volume__progressLine,
                                        styles.btn
                                    )}
                                    type="range"
                                    name="range"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
