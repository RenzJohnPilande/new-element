import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Breadcrumbs = ({ home, previousPages = [], current }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-xs text-black hover:text-red-600 font-semibold">
            {home}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {previousPages.map((page) => (
          <>
            <BreadcrumbSeparator className="text-xs text-black" />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={page.link}
                className="text-xs text-black hover:text-red-600 font-semibold"
              >
                {page.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
        <BreadcrumbSeparator className="text-xs text-black" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xs text-black hover:text-red-600 font-semibold">
            {current}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
