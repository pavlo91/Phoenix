import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { PopupPickerController, createPopup } from '@picmo/popup-picker';
import { EmojiSelection } from 'picmo';

interface EmojiPickerProps {
  onSelect: (selection: EmojiSelection) => void;
}

const EmojiPicker = ({
  children,
  onSelect
}: PropsWithChildren<EmojiPickerProps>) => {
  const ref = useRef(null);
  const instance = useRef<PopupPickerController | null>(null);

  useEffect(() => {
    if (ref.current) {
      instance.current = createPopup(
        {},
        {
          referenceElement: ref.current,
          triggerElement: ref.current,
          position: 'bottom-start',
          showCloseButton: false
        }
      );

      instance.current.addEventListener('emoji:select', onSelect);
    }
    return () => {
      instance.current?.removeEventListener('emoji:select', onSelect);
      instance.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => {
        instance.current?.toggle();
      }}
    >
      {children}
    </div>
  );
};

export default EmojiPicker;
