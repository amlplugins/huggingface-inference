/**
 * @amlplugins/huggingface-inference
 *
 * Thin namespaced re-export of the native @huggingface/inference SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Hugging Face Inference — chat completions, text generation, image generation across 100K+ models via Inference Providers.
 */

import * as _sdk from "@huggingface/inference";
export * from "@huggingface/inference";
export { _sdk as sdk };
export default _sdk;
