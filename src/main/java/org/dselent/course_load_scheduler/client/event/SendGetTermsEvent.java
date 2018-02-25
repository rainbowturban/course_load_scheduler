package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetTermsAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetTermsEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetTermsEvent extends GwtEvent<SendGetTermsEventHandler>{
	public static Type<SendGetTermsEventHandler> TYPE = new Type<SendGetTermsEventHandler>();
	
	private SendGetTermsAction action;
	
	public SendGetTermsEvent(SendGetTermsAction action)
	{
		this.action = action;
	}
	
	public SendGetTermsAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetTermsEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetTermsEventHandler handler)
	{
		handler.onSendGetTerms(this);
	}

}
