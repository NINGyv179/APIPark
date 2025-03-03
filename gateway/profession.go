package gateway

const (
	ProfessionOutput      = "output"
	ProfessionCertificate = "certificate"
	ProfessionRouter      = "router"
	ProfessionApplication = "app"
	ProfessionService     = "service"
	ProfessionAIProvider  = "ai-provider"
)

func RegisterDynamicResourceDriver(key string, worker Worker) {
	dynamicResourceMap[key] = worker
}

func GetDynamicResourceDriver(key string) (Worker, bool) {
	v, ok := dynamicResourceMap[key]
	return v, ok
}

var dynamicResourceMap = map[string]Worker{
	"service": {
		Profession: ProfessionService,
		Driver:     "http",
	},
	"file-access-log": {
		Profession: ProfessionOutput,
		Driver:     "file",
	},
	"http-access-log": {
		Profession: ProfessionOutput,
		Driver:     "http_output",
	},
	"nsqd-access-log": {
		Profession: ProfessionOutput,
		Driver:     "nsqd",
	},
	"syslog-access-log": {
		Profession: ProfessionOutput,
		Driver:     "syslog_output",
	},
	"kafka-access-log": {
		Profession: ProfessionOutput,
		Driver:     "kafka_output",
	},
	"influxdbv2": {
		Profession: ProfessionOutput,
		Driver:     "influxdbv2",
	},
	"redis": {
		Profession: ProfessionOutput,
		Driver:     "redis",
	},
	// 证书
	"certificate": {
		Profession: ProfessionCertificate,
		Driver:     "server",
	},
	//"openai": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "openai",
	//},
	//"google": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "google",
	//},
	//"anthropic": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "anthropic",
	//},
	//"moonshot": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "moonshot",
	//},
	//"tongyi": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "tongyi",
	//},
	//"zhipuai": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "zhipuai",
	//},
	//"fireworks": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "fireworks",
	//},
	//"novita": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "novita",
	//},
	//"mistralai": {
	//	Profession: ProfessionAIProvider,
	//	Driver:     "mistralai",
	//},
}

type Worker struct {
	Profession string
	Driver     string
}
