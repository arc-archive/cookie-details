/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cookie-details.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../date-time/date-time.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../iron-resizable-behavior/iron-resizable-behavior.d.ts" />

declare namespace UiElements {

  /**
   * A cookie details view.
   */
  class CookieDetails extends
    Polymer.IronResizableBehavior(
    Polymer.Element) {

    /**
     * A cookie to render
     */
    cookie: object|null|undefined;

    /**
     * Sends non-bubbling `delete-cookie` event to the parent element to perform
     * delete action.
     */
    _deleteCookie(): void;

    /**
     * Sends non-bubbling `edit-cookie` event to the parent element to perform
     * edit action.
     */
    _editCookie(): void;
  }
}

interface HTMLElementTagNameMap {
  "cookie-details": UiElements.CookieDetails;
}
