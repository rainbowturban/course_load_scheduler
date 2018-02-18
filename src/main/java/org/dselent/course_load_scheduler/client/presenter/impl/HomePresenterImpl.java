package org.dselent.course_load_scheduler.client.presenter.impl;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import org.dselent.course_load_scheduler.client.view.HomeView;
import org.dselent.course_load_scheduler.client.event.LoadHomePageEvent;
import org.dselent.course_load_scheduler.client.presenter.HomePresenter;

import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.inject.Inject;

public class HomePresenterImpl extends BasePresenterImpl implements HomePresenter{
	private IndexPresenter parentPresenter;
	private HomeView view;
	
	@Inject
	public HomePresenterImpl(IndexPresenter parentPresenter, HomeView view)
	{
		this.view = view;
		this.parentPresenter = parentPresenter;
		view.setPresenter(this);
		
	}
	@Override
	public void bind()
	{
		HandlerRegistration registration;

		registration = eventBus.addHandler(LoadHomePageEvent.TYPE, this);
		eventBusRegistration.put(LoadHomePageEvent.TYPE, registration);
	}

	public IndexPresenter getParentPresenter() {
		return parentPresenter;
	}
	public HomeView getView() {
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
	public void onLoadHomePage(LoadHomePageEvent evt) {
		
		this.go(parentPresenter.getView().getViewRootPanel());
	}
	
	@Override
	public void home() {
		// TODO Auto-generated method stub
		
	}
	
	public void setParentPresenter(IndexPresenter parentPresenter) {
		this.parentPresenter = parentPresenter;
	}
}
