import { Button, Editor, Link, Menu, MenuItem, Text } from "@jamsr-ui/react";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-4">
      <Text as="h1" variant="h1">
        Hello world!
      </Text>
      <Button>Click Me!</Button>
      <Link href="#">Hii There</Link>
      <Menu trigger={<Button>Trigger</Button>}>
        <MenuItem>Menu Item1</MenuItem>
      </Menu>
      <div className="text-foreground-secondary">Hello world!</div>
      <Editor />
    </div>
  );
}

export default App;
