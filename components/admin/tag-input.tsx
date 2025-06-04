import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface TagInputProps {
  tags: string[];
  setTags: (value: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInput("");
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 ">
      {tags.map((tag, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="flex items-center font-normal"
        >
          {tag}
          <Button
            variant={"ghost"}
            size={"xs"}
            onClick={() => removeTag(index)}
            className="ml-2 p-1 !hover:bg-transparent hover:text-destructive-foreground focus:outline-none"
          >
            &times;
          </Button>
        </Badge>
      ))}
      <Input
        id="tags"
        name="tags"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Press comma to add a tag"
        className="border-none focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default TagInput;
