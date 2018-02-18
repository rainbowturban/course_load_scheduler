package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;
import org.dselent.course_load_scheduler.client.view.ManageUserView;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;

public class ManageUserPresenterImpl extends BasePresenterImpl implements ManageUserPresenter {
	private IndexPresenter parentPresenter;
	private ManageUserView view;
	
	@Inject
	public ManageUserPresenterImpl(IndexPresenter parentPresenter, ManageUserView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
	}
	@Override
	public void bind()
	{
		HandlerRegistration registration;

		//button events for when they click on create or cancel buttons
		//		registration = eventBus.addHandler(InvalidLoginEvent.TYPE, this);
		//		eventBusRegistration.put(InvalidLoginEvent.TYPE, registration);
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}
	public ManageUserView getView() {
		return view;
	}

	@Override
	public void go(HasWidgets container)
	{
		container.clear();
		container.add(view.getWidgetContainer());
	}

	@Override
	public void init()
	{
		bind();
	}
	
	@Override
	public void manageUser() {
		// TODO Auto-generated method stub
		
	}
	
	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}
	
}
