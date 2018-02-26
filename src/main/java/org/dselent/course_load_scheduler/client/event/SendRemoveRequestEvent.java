package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendRemoveRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendRemoveRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendRemoveRequestEvent extends GwtEvent<SendRemoveRequestEventHandler>{
	public static Type<SendRemoveRequestEventHandler> TYPE = new Type<SendRemoveRequestEventHandler>();
	
	private SendRemoveRequestAction action;
	
	public SendRemoveRequestEvent(SendRemoveRequestAction action)
	{
		this.action = action;
	}
	
	public SendRemoveRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendRemoveRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendRemoveRequestEventHandler handler)
	{
		handler.onSendRemoveRequest(this);
	}
}
