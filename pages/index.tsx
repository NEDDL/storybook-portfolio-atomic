import { Button } from "src/components/atoms/button/Button";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
        <Button
          color="Primary"
          icon
          iconType="Calendar"
          label="My calendar"
          menu
          onButtonClick={() => {
            console.log("Button click");
          }}
          onMenuFirstRowClick={() => {
            console.log("Row 1 click");
          }}
          onMenuSecondRowClick={() => {
            console.log("Row 2 click");
          }}
          onMenuThirdRowClick={() => {
            console.log("Row 3 click");
          }}
          size="md"
          variant="Contained"
        />
      </div>
    </div>
  );
}
