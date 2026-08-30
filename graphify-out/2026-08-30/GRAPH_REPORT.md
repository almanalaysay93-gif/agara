# Graph Report - agara-elevated-life  (2026-08-30)

## Corpus Check
- 90 files · ~224,038 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 721 nodes · 1134 edges · 89 communities (36 shown, 53 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Custom Components
- Dev Dependencies
- Sheet UI Component
- App Shell & Routing
- Accordion & Avatar UI
- TypeScript References
- Product Research & Media
- Button Group & Field UI
- Package Configuration
- TS Config & Build
- Debug Collector
- Menubar UI Component
- Context Menu UI
- Dropdown Menu UI
- Component Library Config
- Carousel UI Component
- Form UI Component
- Brand Product Imagery
- Runtime Dependencies
- Item UI Component
- Home Page & Landing
- Chart & Sidebar UI
- Drawer UI Component
- Select UI Component
- Alert Dialog UI
- Navigation Menu UI
- Vite Build Config
- Button & Alert Actions
- Empty State UI
- Pagination UI
- Toggle & Toggle Group
- Alert UI Component
- Input OTP Component
- Popover UI Component
- Auth & Shared Constants
- Hover Card UI
- Resizable Panels UI
- Express Server
- Badge UI Component
- CVA Styling Utility
- CLSX Utility
- CMDK Command Palette
- Embla Carousel Dep
- Express Dep
- Framer Motion Dep
- Hook Form Resolvers
- Input OTP Dep
- Lucide Icons Dep
- Next Themes Dep
- Radix Accordion Dep
- Radix Alert Dialog Dep
- Radix Aspect Ratio Dep
- Radix Avatar Dep
- Radix Checkbox Dep
- Radix Collapsible Dep
- Radix Context Menu Dep
- Radix Dialog Dep
- Radix Dropdown Dep
- Radix Hover Card Dep
- Radix Menubar Dep
- Radix Navigation Dep
- Radix Progress Dep
- Radix Radio Group Dep
- Radix Scroll Area Dep
- Radix Select Dep
- Radix Separator Dep
- Radix Slider Dep
- Radix Slot Dep
- Radix Switch Dep
- Radix Tabs Dep
- Radix Toggle Dep
- Radix Toggle Group Dep
- Radix Tooltip Dep
- React Day Picker Dep
- React DOM Dep
- React Hook Form Dep
- Resizable Panels Dep
- Sonner Toast Dep
- Streamdown Dep
- Tailwind Merge Dep
- TW Animate Dep
- Vaul Dep
- Wouter Router Dep
- Zod Validation Dep
- Clinical Vitality Style
- Roasted Atelier Style

## God Nodes (most connected - your core abstractions)
1. `cn()` - 274 edges
2. `compilerOptions` - 15 edges
3. `compilerOptions` - 14 edges
4. `Button()` - 10 edges
5. `buttonVariants` - 9 edges
6. `scripts` - 7 edges
7. `Google Drive Media Inventory` - 7 edges
8. `logUiEvent()` - 6 edges
9. `installUiEventListeners()` - 6 edges
10. `useDialogComposition()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Media Cropping Fix & Containment` --references--> `Google Drive Media Inventory`  [INFERRED]
  todo.md → drive_inventory.md
- `Coffee Support Image (support-image-b.png)` --conceptually_related_to--> `Agara Coffee`  [INFERRED]
  drive_inventory.md → agara_product_research.md
- `Matcha Support Image (support-image-a.png)` --conceptually_related_to--> `MATCHAGARA`  [INFERRED]
  drive_inventory.md → agara_product_research.md
- `Research-Informed Product Education Plan` --conceptually_related_to--> `Agara Research & Claim Guardrails`  [INFERRED]
  todo.md → agara_product_research.md
- `Google Fonts Typography Imports` --implements--> `Agara Typography System`  [INFERRED]
  client/index.html → ideas.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Ritual Media and Storytelling Pipeline** — ideas_ritual_phases_arc, drive_inventory_ritual_video_c, drive_inventory_support_image_a, drive_inventory_support_image_b [INFERRED 0.85]
- **Botanical Editorial Design System** — ideas_botanical_editorial_ritual, ideas_color_philosophy, ideas_typography_system, ideas_leaf_flame_monogram [EXTRACTED 1.00]
- **Agara Product Claim Compliance Framework** — agara_product_research_agara_coffee, agara_product_research_matchagara, agara_product_research_research_guardrails, todo_research_informed_product_education [INFERRED 0.95]

## Communities (89 total, 53 thin omitted)

### Community 0 - "Custom Components"
Cohesion: 0.06
Nodes (38): ManusDialogProps, loadMapScript(), MapView(), MapViewProps, Window, Command(), CommandDialog(), CommandGroup() (+30 more)

### Community 1 - "Dev Dependencies"
Cohesion: 0.04
Nodes (45): add, autoprefixer, @builder.io/vite-plugin-jsx-loc, esbuild, devDependencies, add, autoprefixer, @builder.io/vite-plugin-jsx-loc (+37 more)

### Community 2 - "Sheet UI Component"
Cohesion: 0.06
Nodes (37): Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle(), Sidebar() (+29 more)

### Community 3 - "App Shell & Routing"
Cohesion: 0.06
Nodes (26): App(), ErrorBoundary, Props, State, Card(), CardAction(), CardContent(), CardDescription() (+18 more)

### Community 4 - "Accordion & Avatar UI"
Cohesion: 0.09
Nodes (31): AccordionContent(), AccordionItem(), AccordionTrigger(), Avatar(), AvatarFallback(), AvatarImage(), BreadcrumbEllipsis(), BreadcrumbItem() (+23 more)

### Community 5 - "TypeScript References"
Cohesion: 0.07
Nodes (30): build, client/src/**/*, dist, dom, dom.iterable, esnext, node, node_modules (+22 more)

### Community 6 - "Product Research & Media"
Cohesion: 0.10
Nodes (21): Agara Coffee, MATCHAGARA, Agara Research & Claim Guardrails, Client HTML Document Entrypoint, Main Application Script Reference, Google Fonts Typography Imports, Google Drive Media Inventory, Reference Packaging Image (reference-packaging.png) (+13 more)

### Community 7 - "Button Group & Field UI"
Cohesion: 0.13
Nodes (16): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants, Field(), FieldContent(), FieldDescription(), FieldError() (+8 more)

### Community 8 - "Package Configuration"
Cohesion: 0.11
Nodes (17): license, name, tailwindcss>nanoid, packageManager, wouter@3.7.1, pnpm, overrides, patchedDependencies (+9 more)

### Community 9 - "TS Config & Build"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 10 - "Debug Collector"
Cohesion: 0.24
Nodes (15): compactText(), describeElement(), elText(), formatArg(), formatArgs(), getInputValueSafe(), installUiEventListeners(), nav() (+7 more)

### Community 11 - "Menubar UI Component"
Cohesion: 0.12
Nodes (11): Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarRadioItem(), MenubarSeparator(), MenubarShortcut() (+3 more)

### Community 12 - "Context Menu UI"
Cohesion: 0.12
Nodes (9): ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut(), ContextMenuSubContent() (+1 more)

### Community 13 - "Dropdown Menu UI"
Cohesion: 0.12
Nodes (9): DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut(), DropdownMenuSubContent() (+1 more)

### Community 14 - "Component Library Config"
Cohesion: 0.12
Nodes (15): aliases, components, hooks, lib, ui, utils, rsc, $schema (+7 more)

### Community 15 - "Carousel UI Component"
Cohesion: 0.19
Nodes (13): Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions (+5 more)

### Community 16 - "Form UI Component"
Cohesion: 0.20
Nodes (11): FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue, FormLabel() (+3 more)

### Community 17 - "Brand Product Imagery"
Cohesion: 0.19
Nodes (14): Agara Cafe Dark Roast Coffee Packaging (30 Servings 75g), Agara Brand Pillars (Premium Ingredients, Functional Benefits, Clean & Natural, Elevated Life), Agara Elevated Life Dual Product Lineup Banner (Matchagara & Agara Cafe), Matchagara Functional Matcha Packaging (30 Servings 120g), Agara Cafe Dark Roast Coffee Product Display with Whole & Ground Beans, Elevate Your Day Agara Cafe Coffee Hero Ad Banner, Shop Now Call-to-Action for Agara Cafe, Elevate Your Day Matchagara Functional Matcha Hero Ad Banner (+6 more)

### Community 18 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): axios, nanoid, dependencies, axios, nanoid, @radix-ui/react-label, @radix-ui/react-popover, react (+5 more)

### Community 19 - "Item UI Component"
Cohesion: 0.18
Nodes (12): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+4 more)

### Community 20 - "Home Page & Landing"
Cohesion: 0.25
Nodes (9): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartTooltipContent(), getPayloadConfigFromPayload(), THEMES (+1 more)

### Community 21 - "Chart & Sidebar UI"
Cohesion: 0.18
Nodes (5): Checkbox(), Progress(), Slider(), Spinner(), Switch()

### Community 22 - "Drawer UI Component"
Cohesion: 0.18
Nodes (6): DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerTitle()

### Community 23 - "Select UI Component"
Cohesion: 0.18
Nodes (7): SelectContent(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton(), SelectSeparator(), SelectTrigger()

### Community 24 - "Alert Dialog UI"
Cohesion: 0.20
Nodes (6): AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay(), AlertDialogTitle()

### Community 25 - "Navigation Menu UI"
Cohesion: 0.22
Nodes (9): NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 26 - "Vite Build Config"
Cohesion: 0.24
Nodes (7): ensureLogDir(), LOG_DIR, LogSource, plugins, TRIM_TARGET_BYTES, trimLogFile(), writeToLogFile()

### Community 27 - "Button & Alert Actions"
Cohesion: 0.36
Nodes (7): AlertDialogAction(), AlertDialogCancel(), Button(), buttonVariants, Calendar(), CalendarDayButton(), PaginationLink()

### Community 28 - "Empty State UI"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 29 - "Pagination UI"
Cohesion: 0.25
Nodes (6): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 30 - "Toggle & Toggle Group"
Cohesion: 0.43
Nodes (5): ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 31 - "Alert UI Component"
Cohesion: 0.50
Nodes (4): Alert(), AlertDescription(), AlertTitle(), alertVariants

### Community 32 - "Input OTP Component"
Cohesion: 0.40
Nodes (3): InputOTP(), InputOTPGroup(), InputOTPSlot()

## Knowledge Gaps
- **184 isolated node(s):** `Props`, `State`, `ManusDialogProps`, `Window`, `MapViewProps` (+179 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **53 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Accordion & Avatar UI` to `Custom Components`, `Sheet UI Component`, `App Shell & Routing`, `Button Group & Field UI`, `Menubar UI Component`, `Context Menu UI`, `Dropdown Menu UI`, `Carousel UI Component`, `Form UI Component`, `Item UI Component`, `Home Page & Landing`, `Chart & Sidebar UI`, `Drawer UI Component`, `Select UI Component`, `Alert Dialog UI`, `Navigation Menu UI`, `Button & Alert Actions`, `Empty State UI`, `Pagination UI`, `Toggle & Toggle Group`, `Alert UI Component`, `Input OTP Component`, `Popover UI Component`, `Hover Card UI`, `Resizable Panels UI`, `Badge UI Component`?**
  _High betweenness centrality (0.277) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Configuration`, `CVA Styling Utility`, `CLSX Utility`, `CMDK Command Palette`, `Embla Carousel Dep`, `Express Dep`, `Framer Motion Dep`, `Hook Form Resolvers`, `Input OTP Dep`, `Lucide Icons Dep`, `Next Themes Dep`, `Radix Accordion Dep`, `Radix Alert Dialog Dep`, `Radix Aspect Ratio Dep`, `Radix Avatar Dep`, `Radix Checkbox Dep`, `Radix Collapsible Dep`, `Radix Context Menu Dep`, `Radix Dialog Dep`, `Radix Dropdown Dep`, `Radix Hover Card Dep`, `Radix Menubar Dep`, `Radix Navigation Dep`, `Radix Progress Dep`, `Radix Radio Group Dep`, `Radix Scroll Area Dep`, `Radix Select Dep`, `Radix Separator Dep`, `Radix Slider Dep`, `Radix Slot Dep`, `Radix Switch Dep`, `Radix Tabs Dep`, `Radix Toggle Dep`, `Radix Toggle Group Dep`, `Radix Tooltip Dep`, `React Day Picker Dep`, `React DOM Dep`, `React Hook Form Dep`, `Resizable Panels Dep`, `Sonner Toast Dep`, `Streamdown Dep`, `Tailwind Merge Dep`, `TW Animate Dep`, `Vaul Dep`, `Wouter Router Dep`, `Zod Validation Dep`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `Package Configuration`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `Props`, `State`, `ManusDialogProps` to the rest of the system?**
  _184 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Custom Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06108597285067873 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `Sheet UI Component` be split into smaller, more focused modules?**
  _Cohesion score 0.05919661733615222 - nodes in this community are weakly interconnected._