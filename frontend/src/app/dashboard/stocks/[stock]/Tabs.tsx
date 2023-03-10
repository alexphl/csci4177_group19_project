import { Tab } from "@headlessui/react";
import { memo } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Tab navigation panel
 **/
const Tabs = (props: {
  selector: [number, any];
  components: string[];
  className?: string;
}) => {
  const categories = props.components;
  const [selectedIndex, setSelectedIndex] = props.selector;

  return (
    <div className={props.className}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 rounded-2xl bg-black/[0.4] p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-xl py-1 text-xs font-bold saturate-200 leading-5 outline-none",
                  selected
                    ? "bg-white/[0.1] font-extrabold text-white/[0.95]"
                    : "text-white/[0.4] hover:bg-white/[0.04] hover:text-white/[0.90]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default memo(Tabs);
