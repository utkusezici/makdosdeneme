export const dynamicImportIcon = async (iconName) => {
  try {
    const iconModule = await import(`@tabler/icons-react`);
    return iconModule[iconName];
  } catch (error) {
    console.error(`Icon ${iconName} could not be imported`, error);
    return null;
  }
};