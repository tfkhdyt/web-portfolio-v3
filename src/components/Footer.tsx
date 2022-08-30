import { Footer } from '@mantine/core';

function MyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Footer height={60} py='md' sx={{ textAlign: 'center', fontSize: 14 }}>
      Copyright @ {currentYear} - Made with ❤️ by tfkhdyt
    </Footer>
  );
}

export default MyFooter;
