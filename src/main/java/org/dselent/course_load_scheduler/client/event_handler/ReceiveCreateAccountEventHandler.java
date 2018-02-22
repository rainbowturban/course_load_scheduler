package org.dselent.course_load_scheduler.client.event_handler;
import org.dselent.course_load_scheduler.client.event.ReceiveCreateAccountEvent;
import com.google.gwt.event.shared.EventHandler;

public interface ReceiveCreateAccountEventHandler extends EventHandler
{
	  public void onReceiveCreateAccount(ReceiveCreateAccountEvent evt);
}