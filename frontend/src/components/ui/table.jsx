import * as React from "react";
import { cn } from "@/lib/utils";

/* Table wrapper */
const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm text-gray-300", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

/* Header */
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("border-b border-white/5", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

/* Body */
const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y divide-white/5", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

/* Row */
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-white/5",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

/* Head cell */
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-gray-400 text-xs uppercase tracking-wide",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

/* Cell */
const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
};