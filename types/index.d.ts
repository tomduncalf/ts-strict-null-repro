interface BaseSyncConfiguration {
  flexible?: boolean | undefined;
}

interface FlexibleSyncConfiguration extends BaseSyncConfiguration {
  flexible: true;
}

interface PartitionSyncConfiguration extends BaseSyncConfiguration {
  flexible?: false | undefined;
  partitionValue: any;
}

type SyncConfiguration = FlexibleSyncConfiguration | PartitionSyncConfiguration;

interface BaseConfiguration {}

interface ConfigurationWithSync extends BaseConfiguration {
  sync: SyncConfiguration;
  // This line and its counterpart (marked (1)) in ConfigurationWithoutSync seem to conflict
  // somehow when strictNullChecks: false – if one or the other is removed, then index.ts type checks correctly
  disableFormatUpgrade?: never;
}

interface ConfigurationWithoutSync extends BaseConfiguration {
  sync?: never;
  // (1)
  disableFormatUpgrade?: boolean;
}

type Configuration = ConfigurationWithSync | ConfigurationWithoutSync;

declare class Realm {
  constructor(config?: Configuration);
}
