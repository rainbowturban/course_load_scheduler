package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendUpdateStatusRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendUpdateStatusRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendUpdateStatusRequestEvent extends GwtEvent<SendUpdateStatusRequestEventHandler>{
	public static Type<SendUpdateStatusRequestEventHandler> TYPE = new Type<SendUpdateStatusRequestEventHandler>();
	
	private SendUpdateStatusRequestAction action;
	
	public SendUpdateStatusRequestEvent(SendUpdateStatusRequestAction action)
	{
		this.action = action;
	}
	
	public SendUpdateStatusRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendUpdateStatusRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendUpdateStatusRequestEventHandler handler)
	{
		handler.onSendUpdateStatusRequest(this);
	}
}
