import * as React from "react";
import { cn } from "@/lib/utils";

/* Context */
const TabsContext = React.createContext();

/* Root */
function Tabs({ defaultValue, children, className }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

/* Tabs List */
function TabsList({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-xl bg-white/5 p-1",
        className
      )}
      {...props}
    />
  );
}

/* Trigger */
function TabsTrigger({ value, className, children, ...props }) {
  const context = React.useContext(TabsContext);
  const isActive = context.value === value;

  return (
    <button
      onClick={() => context.setValue(value)}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
        isActive
          ? "bg-red-600 text-white shadow-md shadow-red-600/30"
          : "text-gray-400 hover:text-white hover:bg-white/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* Content */
function TabsContent({ value, className, children, ...props }) {
  const context = React.useContext(TabsContext);

  if (context.value !== value) return null;

  return (
    <div
      className={cn("mt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };