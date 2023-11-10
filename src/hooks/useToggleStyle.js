import { useAppContext } from 'providers/AppProvider';
import { useEffect, useState } from 'react';
import is from 'is_js';

const publicUrl = process.env.PUBLIC_URL;

const useToggleStyle = () => {
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);
  const {
    config: { theme, isRTL },
    configDispatch
  } = useAppContext();
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
    if (is.safari()) {
      HTMLClassList.add('safari');
    }
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.mac()) {
      HTMLClassList.add('osx');
    }
  }, [HTMLClassList]);

  useEffect(() => {
    setIsStylesheetLoaded(false);
    Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(
      link => link.remove()
    );
    const link = document.createElement('link');
    link.href = `${publicUrl}/css/theme.min${isRTL ? '.rtl' : ''}.css`;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.className = 'theme-stylesheet';

    const userLink = document.createElement('link');
    userLink.href = `${publicUrl}/css/user.min${isRTL ? '.rtl' : ''}.css`;
    userLink.type = 'text/css';
    userLink.rel = 'stylesheet';
    userLink.className = 'theme-stylesheet';

    link.onload = () => {
      setIsStylesheetLoaded(true);
    };

    document.head.appendChild(link);
    document.head.appendChild(userLink);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

  useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove'](
      'dark'
    );
    configDispatch({
      type: 'REFRESH'
    });
  }, [theme]);

  return { isStylesheetLoaded };
};

export default useToggleStyle;
