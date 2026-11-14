import { Skeleton } from 'primereact/skeleton'

const menuItems = Array.from({ length: 7 }, (_, index) => index)

const LayoutSkeleton = () => {
    return (
        <div className="layout-wrapper layout-static" role="status" aria-label="Carregando página" aria-busy="true">
            <div className="layout-topbar" aria-hidden="true">
                <Skeleton width="9rem" height="1.75rem" />
                <Skeleton shape="circle" size="2.5rem" className="layout-menu-button" />
                <div className="layout-topbar-menu">
                    <Skeleton shape="circle" size="2.5rem" />
                    <Skeleton shape="circle" size="2.5rem" />
                </div>
            </div>

            <div className="layout-sidebar" aria-hidden="true">
                <Skeleton width="8rem" height="1rem" className="mb-3" />
                {menuItems.map((item) => (
                    <div key={item} className="flex align-items-center gap-2 mb-3">
                        <Skeleton shape="circle" size="1.25rem" />
                        <Skeleton width={`${6 + (item % 3) * 1.5}rem`} height="1rem" />
                    </div>
                ))}
            </div>

            <div className="layout-main-container">
                <div className="layout-main" aria-hidden="true">
                    <Skeleton width="12rem" height="2rem" className="mb-4" />
                    <Skeleton width="100%" height="10rem" className="mb-3" />
                    <div className="grid">
                        <div className="col-12 md:col-6">
                            <Skeleton width="100%" height="7rem" />
                        </div>
                        <div className="col-12 md:col-6">
                            <Skeleton width="100%" height="7rem" />
                        </div>
                    </div>
                </div>
                <div className="layout-footer" aria-hidden="true">
                    <Skeleton width="10rem" height="1rem" />
                </div>
            </div>
        </div>
    )
}

export default LayoutSkeleton
