import { Card, CardBody } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

export default function CheckComponent({
  checkedfn,
  uncheckedfn,
  title,
  content,
}) {
  const [checked, setChecked] = useState(false);

  const valueChanged = (value) => {
    if (value) {
      checkedfn();
    } else {
      uncheckedfn();
    }
    setChecked(value);
  };

  return (
    <Card className="mt-2">
      <CardBody>
        <div className="flex">
          <div className="w-1/12 content-center items-center flex">
            <Checkbox
              classNames={{ base: "m-auto" }}
              size="lg"
              onValueChange={valueChanged}
            />
          </div>
          <div className="w-11/12">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Welcome to CX CG Checklist"
                classNames={{
                  title: checked
                    ? "font-bold text-lg text-gray-400 line-through"
                    : "font-bold text-lg",
                }}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      overflowY: "unset",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      overflowY: "hidden",
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
                title={title}
              >
                <p className={checked ? "text-gray-400 line-through" : ""}>
                  {content}
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
