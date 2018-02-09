package org.dselent.course_load_scheduler.client.event_handler;
import org.dselent.course_load_scheduler.client.event.SendLoginEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendLoginEventHandler extends EventHandler
{
	  public void onSendLogin(SendLoginEvent evt);
}
