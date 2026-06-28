"use client";

import {
  useState,
  type ReactNode,
} from "react";

export interface MobileAccordionItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface MobileAccordionProps {
  items: MobileAccordionItem[];
  className?: string;
}

export default function MobileAccordion({
  items,
  className = "",
}: MobileAccordionProps) {
  const [openItemId, setOpenItemId] =
    useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId((currentId) =>
      currentId === id ? null : id,
    );
  };

  return (
    <div
      className={`mobile-accordion ${className}`.trim()}
    >
      {items.map((item) => {
        const isOpen = openItemId === item.id;
        const buttonId =
          `mobile-accordion-button-${item.id}`;
        const panelId =
          `mobile-accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="mobile-accordion__item"
          >
            <button
              id={buttonId}
              type="button"
              className="mobile-accordion__button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.label}</span>

              <span
                className="mobile-accordion__icon"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              className={[
                "mobile-accordion__panel",
                isOpen
                  ? "mobile-accordion__panel--open"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}