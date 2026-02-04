import React, { ReactNode, CSSProperties, useEffect, useRef, useState } from "react";
import "./Timeline.css";

interface VerticalTimelineProps {
  animate?: boolean;
  className?: string;
  layout?: "2-columns" | "1-column" | "1-column-left" | "1-column-right";
  lineColor?: string;
  children: ReactNode;
}

export const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  animate = true,
  className = "",
  layout = "2-columns",
  lineColor = "#0563bb",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "object") {
      document.documentElement.style.setProperty("--line-color", lineColor);
    }

    if (!animate || !containerRef.current) return;

    // Setup intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bounce-in");
            entry.target.classList.remove("is-hidden");
          } else {
            // Reset animation when scrolling back up/down
            entry.target.classList.remove("bounce-in");
            entry.target.classList.add("is-hidden");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all timeline elements (icons and content)
    const elements = containerRef.current.querySelectorAll(
      ".vertical-timeline-element-icon, .vertical-timeline-element-content"
    );
    elements.forEach((el) => {
      el.classList.add("is-hidden");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [animate, lineColor]);

  return (
    <div
      ref={containerRef}
      className={`vertical-timeline ${animate ? "vertical-timeline--animate" : ""} ${layout === "2-columns" ? "vertical-timeline--two-columns" : ""}`}
    >
      {children}
    </div>
  );
};

interface VerticalTimelineElementProps {
  children?: ReactNode;
  className?: string;
  contentArrowStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  date?: ReactNode;
  dateClassName?: string;
  icon?: ReactNode;
  iconClassName?: string;
  iconOnClick?: () => void;
  onTimelineElementClick?: () => void;
  iconStyle?: CSSProperties;
  id?: string;
  position?: "left" | "right" | "";
  style?: CSSProperties;
  textClassName?: string;
  visible?: boolean;
  shadowSize?: "small" | "medium" | "large";
}

export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps> = ({
  children = "",
  className = "",
  contentArrowStyle = null,
  contentStyle = null,
  date = "",
  dateClassName = "",
  icon = null,
  iconClassName = "",
  iconOnClick,
  onTimelineElementClick,
  iconStyle = null,
  id = "",
  position = "left",
  style = null,
  textClassName = "",
  visible = false,
  shadowSize = "small",
}) => {
  return (
    <div
      id={id}
      className={`vertical-timeline-element vertical-timeline-element--${position} ${visible ? "" : ""}`}
      style={style || {}}
    >
      <span
        className={`vertical-timeline-element-icon shadow-size-${shadowSize}`}
        style={iconStyle || {}}
        onClick={iconOnClick}
      >
        {icon}
      </span>
      <div
        className="vertical-timeline-element-content"
        style={contentStyle || {}}
        onClick={onTimelineElementClick}
      >
        {children}
        <span className={`vertical-timeline-element-date ${dateClassName}`}>
          {date}
        </span>
      </div>
    </div>
  );
};

export default VerticalTimeline;

