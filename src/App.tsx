import { Button, Link, Menu, MenuItem, Text } from "@jamsr-ui/react";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-4">
      <Text as="h1" variant="h1">
        Hello world2!
      </Text>
      <div></div>
      <div className="bg-content1"></div>
      <Button>Hey there i am using Neovim2</Button>
      <Text as="p" className="text-foreground-muted">
        HI there
      </Text>
      <Link href="#">Hii There</Link>
      <Menu trigger={<Button>Trigger</Button>}>
        <MenuItem>Menu Item1</MenuItem>
      </Menu>
      <div className="text-foreground-secondary">Hello world!</div>
    </div>
  );
}

export default App;
